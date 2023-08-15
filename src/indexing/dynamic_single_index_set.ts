import { IIndexSetCursor } from '../core/i_index_set_cursor'
import { ReadonlyUint32Array } from '../core/readonly_typed_array'
import IndexSetConstants from './index_set_constants'
import { DynamicSingleIndexSetCursor } from './dynamic_single_index_set_cursor'


const MASK_BOTTOMBITS = IndexSetConstants.MASK_BOTTOMBITS
const MASK_TOPBITS    = IndexSetConstants.MASK_TOPBITS

/**
 * As deep as the stack of nodes for this can ever be.
 */
export const MAX_NODE_STACK      = 9
export const NODE_SIZE           = 8
const HALF_NODE_SIZE             = NODE_SIZE >>> 1
export const ELEMENT_SIZE        = 2
export const NODE_ELEMENT_SHIFT  = 4
export const NODE_ELEMENT_SIZE   = NODE_SIZE * ELEMENT_SIZE
const HALF_NODE_ELEMENT_SIZE     = NODE_ELEMENT_SIZE >>> 1
export const NODE_MASK           = ~(( 1 << NODE_ELEMENT_SHIFT) - 1 )

const splitStack = new Uint32Array( MAX_NODE_STACK )

/**
 * A single set of indices
 */
export default class DynamicSingleIndexSet {

  private freeListSize_: number = 0
  private freeList_: Uint32Array
  private data_: Uint32Array
  private allocationMarker_: number = 0

  private rootNode_?: number

  private depth_: number = 0
  private size_: number = 0
  private version_: number = 0

  /**
   * Get the root node for this
   *
   * @return {number} The root node for this.
   */
  public get root(): number | undefined {
    return this.rootNode_
  }

  /**
   * Get the buffer for this
   *
   * @return {ReadonlyUint32Array} The buffer for this.
   */
  public get buffer(): ReadonlyUint32Array {
    return this.data_
  }

  /**
   * Get the tree depth for this
   *
   * @return {number} The tree depth for this.
   */
  public get depth(): number {
    return this.depth_
  }


  /**
   * Get the number of elements in this set
   *
   * @return {number} The size of this.
   */
  public get size(): number {
    return this.size_
  }

  /**
   * Get current version of this
   *
   * @return {number} The version of this.
   */
  public get version(): number {
    return this.version_
  }

  /**
   * Free a node.
   *
   * @param nodeIndex  The node index to free.
   */
  private freeNode( nodeIndex: number ) {

    let freeList = this.freeList_

    if ( this.freeListSize_ === freeList.length ) {

      this.freeList_ = new Uint32Array( freeList.length << 1 )
      this.freeList_.set(freeList)

      freeList = this.freeList_
    }

    freeList[ this.freeListSize_++ ] = nodeIndex
  }

  /**
   * Allocate a node.
   *
   * @return {number} The allocated node index.
   */
  private allocateNode(): number {

    if ( this.freeListSize_ === 0 ) {

      if ( this.allocationMarker_ === ( this.data_.length >>> NODE_ELEMENT_SHIFT ) ) {

        const oldData = this.data_
        const newData = new Uint32Array(oldData.length << 1)

        newData.set( oldData )

        this.data_ = newData
      }

      return this.allocationMarker_++
    }

    return this.freeList_[ --this.freeListSize_ ]
  }

  /**
   * Split a full node into 2 half full nodes
   *
   * @param nodeIndex The node index to split
   * @return {number} The new second split node
   */
  private splitChild( address: number, key: number ): number {

    const newNodeIndex = this.allocateNode()

    const localData = this.data_

    const nodeIndex         = localData[ address + 1 ]
    const nodeDataIndex     = nodeIndex << NODE_ELEMENT_SHIFT
    const outputDataIndex   = newNodeIndex << NODE_ELEMENT_SHIFT
    const parentNodeAddress = address & NODE_MASK
    const parentNodeCount   = localData[ address & NODE_MASK ] & MASK_BOTTOMBITS

    const insertAddress = address + ELEMENT_SIZE

    localData.copyWithin(
        insertAddress + ELEMENT_SIZE,
        insertAddress,
        ( address & MASK_BOTTOMBITS ) + ( parentNodeCount * ELEMENT_SIZE ) )

    localData[ insertAddress ]     = localData[ nodeDataIndex + HALF_NODE_ELEMENT_SIZE ]
    localData[ insertAddress + 1 ] = newNodeIndex
    localData[ parentNodeAddress ] = parentNodeCount + 1

    localData.copyWithin(
        outputDataIndex,
        nodeDataIndex + HALF_NODE_ELEMENT_SIZE,
        nodeDataIndex + NODE_ELEMENT_SHIFT )

    localData[ nodeDataIndex ] =
      ( localData[ nodeDataIndex ] & MASK_TOPBITS ) | HALF_NODE_SIZE
    localData[ outputDataIndex ] =
      ( localData[ outputDataIndex ] & MASK_TOPBITS ) | HALF_NODE_SIZE

    let probeAddress =
      ( address - nodeDataIndex ) >= HALF_NODE_ELEMENT_SIZE ? outputDataIndex : nodeIndex
    const endAddress = probeAddress + HALF_NODE_ELEMENT_SIZE

    for ( ; probeAddress < endAddress; probeAddress += ELEMENT_SIZE ) {

      const probeKey = localData[ probeAddress ] & MASK_TOPBITS

      if ( probeKey > key ) {
        break
      }
    }

    return probeAddress - ELEMENT_SIZE
  }

  /**
   * Delete a local ID from this.
   *
   * @param key the key to delete.
   * @return {boolean} True if the item existed to be deleted.
   */
  public delete( localID: number ): boolean {

    const rootNode = this.rootNode_

    if ( rootNode === void 0 ) {
      return false
    }

    const key = localID & MASK_TOPBITS
    const valueMask = 1 << ( localID & MASK_BOTTOMBITS )

    let currentDepth = this.depth_

    let   currentNode = rootNode
    const localData   = this.data_
    let   stackDepth  = 0

    // Fast case, growthless leaf insert or leaf find.
    while ( currentDepth > 0 ) {

      const isLeaf         = currentDepth === 1
      const currentAddress = currentNode << NODE_ELEMENT_SHIFT
      const nodeSize       = localData[ currentAddress ] & MASK_BOTTOMBITS
      const endAddress     = currentAddress + ( nodeSize * ELEMENT_SIZE )
      let   probeAddress   = currentAddress

      if ( isLeaf ) {

        // Linear probe should outperform binary search at this smaller node size - CS
        for ( ; probeAddress < endAddress; probeAddress += ELEMENT_SIZE ) {

          const probeKey = localData[ probeAddress ] & MASK_TOPBITS

          if ( probeKey > key ) {
            return false
          }

          if ( probeKey === key ) {
            break
          }
        }

        if ( probeAddress === endAddress ) {
          return false
        }

        const currentValue = localData[ probeAddress + 1 ]

        if ( ( currentValue & valueMask ) === 0 ) {
          return false
        }

        --this.size_
        ++this.version_

        const newValue = ( currentValue ^ valueMask ) >>> 0

        if ( newValue !== 0 ) {
          localData[ probeAddress + 1 ] = newValue

          return true
        }

        // This case will require a node delete.
        if ( nodeSize === 1 ) {
          splitStack[ stackDepth++ ] = probeAddress
          break
        }

        localData.copyWithin( probeAddress, probeAddress + ELEMENT_SIZE, endAddress )

        localData[ currentAddress ] =
          ( localData[ currentAddress ] & MASK_TOPBITS ) |
          ( nodeSize - 1 )

        return true
      }

      // We skip over the first node which is implicit
      // but we will back mark
      probeAddress += ELEMENT_SIZE

      for ( ; probeAddress < endAddress; probeAddress += ELEMENT_SIZE ) {

        const probeKey = localData[ probeAddress ] & MASK_TOPBITS

        if ( probeKey > key ) {
          break
        }
      }

      currentNode = localData[ probeAddress - 1 ]
      splitStack[ stackDepth++ ] = probeAddress - ELEMENT_SIZE

      --currentDepth
    }

    for ( let stackIndex = stackDepth - 1; stackIndex >= 0; --stackIndex ) {

      const currentStack    = splitStack[ stackIndex ]
      const nodeAddress     = currentStack & NODE_MASK
      const currentNodeSize = this.data_[ nodeAddress ] & MASK_BOTTOMBITS

      // Only need to delete nodes that will be made empty
      if ( currentNodeSize !== 1 ) {

        this.data_.copyWithin(
            currentStack,
            currentStack + ELEMENT_SIZE,
            currentStack + ( ELEMENT_SIZE * currentNodeSize ) )

        this.data_[ nodeAddress ] =
          ( this.data_[ nodeAddress ] & MASK_TOPBITS ) |
          ( currentNodeSize - 1 )
        break
      }

      this.freeNode( nodeAddress >>> NODE_ELEMENT_SHIFT )

      if ( stackIndex === 0 ) {

        delete this.rootNode_

      }
    }

    return true
  }

  /**
   * Find the value address, or insert a new value address for a key
   *
   * This address will be valid til at least the next insertion.
   *
   * @param newKey The new key.
   * @return {number} The address of the value for the key.
   */
  private findOrInsertKey( newKey: number ): number {

    let rootNode = this.rootNode_

    if ( rootNode === void 0 ) {

      rootNode = this.allocateNode()

      const rootNodeAddress = rootNode << NODE_ELEMENT_SHIFT

      this.data_[ rootNodeAddress ] = ( newKey & MASK_TOPBITS ) | 1

      this.rootNode_ = rootNode
      this.depth_ = 1

      return rootNodeAddress + 1
    }

    let currentDepth = this.depth_

    let   currentNode = rootNode
    const localData   = this.data_
    let   stackDepth  = 0

    // Fast case, growthless leaf insert or leaf find.
    while ( currentDepth > 0 ) {

      const isLeaf         = currentDepth === 1
      const currentAddress = currentNode << NODE_ELEMENT_SHIFT
      const nodeSize       = localData[ currentAddress ] & MASK_BOTTOMBITS
      const endAddress     = currentAddress + ( nodeSize * ELEMENT_SIZE )
      let   probeAddress   = currentAddress

      if ( isLeaf ) {

        // Linear probe should outperform binary search at this smaller node size - CS
        for ( ; probeAddress < endAddress; probeAddress += ELEMENT_SIZE ) {

          const probeKey = localData[ probeAddress ] & MASK_TOPBITS

          if ( probeKey > newKey ) {
            break
          }

          if ( probeKey === newKey ) {
            return probeAddress + 1
          }
        }

        // This case will require a splitting insert.
        if ( nodeSize === NODE_SIZE ) {
          splitStack[ stackDepth++ ] =
            Math.min( probeAddress, currentAddress + NODE_ELEMENT_SIZE - ELEMENT_SIZE )
          break
        }

        this.data_.copyWithin( probeAddress + ELEMENT_SIZE, probeAddress, endAddress )

        localData[ probeAddress ] = newKey
        localData[ probeAddress + 1 ] = 0

        this.data_[ currentAddress ] =
          ( this.data_[ currentAddress ] & MASK_TOPBITS ) |
          ( nodeSize + 1 )

        return probeAddress + 1
      }

      // We skip over the first node which is implicit
      // but we will back mark
      probeAddress += ELEMENT_SIZE

      for ( ; probeAddress < endAddress; probeAddress += ELEMENT_SIZE ) {

        const probeKey = localData[ probeAddress ] & MASK_TOPBITS

        if ( probeKey > newKey ) {
          break
        }
      }

      currentNode = localData[ probeAddress - 1 ]
      splitStack[ stackDepth++ ] = probeAddress - ELEMENT_SIZE

      --currentDepth
    }

    for ( let stackIndex = 0; stackIndex < stackDepth; ++stackIndex ) {

      let currentStack      = splitStack[ stackIndex ]
      const nodeAddress     = currentStack & NODE_MASK
      const currentNodeSize = this.data_[ nodeAddress ] & MASK_BOTTOMBITS

      // Proactively split full nodes.
      if ( currentNodeSize === NODE_SIZE ) {

        if ( stackIndex === 0 ) {

          const newRootNode        = this.allocateNode()
          const newRootNodeAddress = newRootNode << NODE_ELEMENT_SHIFT

          this.data_[ newRootNodeAddress ]     = 1
          this.data_[ newRootNodeAddress + 1 ] = nodeAddress >> NODE_ELEMENT_SHIFT

          currentStack             = this.splitChild( newRootNodeAddress, newKey )
          splitStack[ stackIndex ] = currentStack

          this.rootNode_ = newRootNode
          ++this.depth_

        } else {

          currentStack             = this.splitChild( splitStack[ stackIndex - 1 ], newKey )
          splitStack[ stackIndex ] = currentStack
        }
      }
    }

    const finalInsertAddress = splitStack[ stackDepth - 1 ]
    const leafNodeAddress    = finalInsertAddress & NODE_MASK
    const currentLeafSize    = this.data_[ leafNodeAddress ] & MASK_BOTTOMBITS

    this.data_.copyWithin(
        finalInsertAddress + ELEMENT_SIZE,
        finalInsertAddress,
        ( finalInsertAddress & NODE_MASK ) + currentLeafSize )

    this.data_[ finalInsertAddress ] = newKey & MASK_TOPBITS
    this.data_[ finalInsertAddress + 1 ] = 0

    this.data_[ leafNodeAddress ] =
      ( this.data_[ leafNodeAddress ] & MASK_TOPBITS ) |
      ( currentLeafSize + 1 )

    return finalInsertAddress + 1
  }

  /**
   * Insert a local ID into this set.
   *
   * @param denseIndex The ID to insert.
   * @return {boolean} True if the item was newly inserted. False otherwise.
   */
  public insert( denseIndex: number ): boolean {

    const topBits          = denseIndex & MASK_TOPBITS
    const address          = this.findOrInsertKey( topBits )
    const bottomBitsOneHot = 1 << ( denseIndex & MASK_BOTTOMBITS )

    const currentValue = this.data_[ address ] >>> 0
    const newValue     = currentValue | ( bottomBitsOneHot >>> 0 )

    if ( newValue === currentValue ) {
      return false
    }

    this.data_[ address ] = newValue

    ++this.size_
    ++this.version_

    return true
  }

  /**
   * Find a particular key if it exists.
   *
   * @param key
   * @return {number | undefined} The address for the value, or undefined if
   * it can't be found.
   */
  private find( key: number ): number | undefined {
    let currentDepth = this.depth_

    const rootNode = this.rootNode_

    if ( rootNode === void 0 ) {
      return
    }

    let   currentNode = rootNode
    const localData   = this.data_

    // Fast case, growthless leaf insert or leaf find.
    while ( currentDepth > 0 ) {

      const isLeaf         = currentDepth === 1
      const currentAddress = currentNode << NODE_ELEMENT_SHIFT
      const nodeSize       = localData[ currentAddress ] & MASK_BOTTOMBITS
      const endAddress     = currentAddress + ( nodeSize * ELEMENT_SIZE )
      let   probeAddress   = currentAddress

      if ( isLeaf ) {

        // Linear probe should outperform binary search at this smaller node size - CS
        for ( ; probeAddress < endAddress; probeAddress += ELEMENT_SIZE ) {

          const probeKey = localData[ probeAddress ] & MASK_TOPBITS

          if ( probeKey > key ) {
            return
          }

          if ( probeKey === key ) {
            return probeAddress + 1
          }
        }

        return
      }

      // We skip over the first node which is implicit
      // but we will back mark
      probeAddress += ELEMENT_SIZE

      for ( ; probeAddress < endAddress; probeAddress += ELEMENT_SIZE ) {

        const probeKey = localData[ probeAddress ] & MASK_TOPBITS

        if ( probeKey > key ) {
          break
        }
      }

      currentNode = localData[ probeAddress - 1 ]

      --currentDepth
    }
  }

  /**
   * Construct this with a matching elements table.
   *
   * @param elements_ The elements in the index, matching the prefix sum indices * 2,
   * where there's 2 elements in the array for each item,
   * packed (first has the bottom 5 bits masked out, and is the top bits, the second
   * is a bit field representing the elements for the top bit range, in a
   * unioned-one-hot representation).
   */
  public constructor( initialDataSize: number = 1 ) {

    initialDataSize = Math.max( 1, initialDataSize )

    this.data_     = new Uint32Array( initialDataSize * NODE_ELEMENT_SIZE )
    this.freeList_ = new Uint32Array( initialDataSize )
  }

  /**
   * Does the set have a particular index for a particular type.
   *
   * @param denseIndex The dense index in the set to check.
   * @return {boolean} True if it has the type.
   */
  public has( denseIndex: number ): boolean {
    const foundAddress = this.find( denseIndex & MASK_TOPBITS )

    if ( foundAddress === void 0 ) {
      return false
    }

    const bottomBitsOneHot = 1 << ( denseIndex & MASK_BOTTOMBITS )

    const currentValue = this.data_[ foundAddress ]

    return ( currentValue & bottomBitsOneHot ) === bottomBitsOneHot
  }

  /**
   * Get a cursor that lets you iterate over the union of the sets of multiple indices.
   *
   * @param indexTypes The list of types to build a cursor out of.
   * @return {IIndexSetCursor} The cursor for the list of types.
   */
  public cursor(): DynamicSingleIndexSetCursor {

    return DynamicSingleIndexSetCursor.allocate( this )

  }

  /* TODO - Add bulk inserter static creators to slurp up an array or cursor into  */
}
