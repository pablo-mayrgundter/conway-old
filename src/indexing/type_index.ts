
export default interface TypeIndex< TypeIDType >
{
    get(name: Uint8Array, offset?: number, length?: number): TypeIDType | undefined;
}
