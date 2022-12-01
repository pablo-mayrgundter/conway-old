import { Model } from "./model";
import SchemaSpecification from "./schema_specification";

export default interface Models< K extends (string | number), M extends Model< K > >
{
    readonly models: ReadonlyMap< K, M >;
}