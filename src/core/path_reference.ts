export default class PathReference
{
    constructor( public readonly model?: string, public readonly entity?: string, public readonly component?: string, public readonly attribute?: string, public readonly index?: (string | number) ) {}
} 
