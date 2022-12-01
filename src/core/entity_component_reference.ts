// We use 
export default class EntityComponentReference
{
    constructor( public readonly __type__: string, public readonly schema: string ) {}

    public equals( other: any ): boolean 
    {
        if ( !(other instanceof EntityComponentReference) )
        {
            return false;
        }

        return other.__type__ === this.__type__ && other.schema == this.schema; 
    }

    
} 