import ModelSpecification from "./model_specification";
import { ComponentTypeNames } from "./model_specification";

export default interface Component< T extends ModelSpecification >
{
    __type__ : ComponentTypeNames< T >;
}
