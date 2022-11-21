export default function jestTest( watch : string ) : string{
    console.log( watch );
    console.log( "--------------\n");
    return watch;
}

console.log( jestTest( "test 3" ) );