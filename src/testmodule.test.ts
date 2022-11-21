import {describe, expect, test} from '@jest/globals';

import jestTest from "./testmodule";

describe( "Main Module Test", () => {
    test( "jestTest( \"watcher\" )" , () =>{

        expect( jestTest( "watcher ") ).toBe( "watcher" );

    } );
});