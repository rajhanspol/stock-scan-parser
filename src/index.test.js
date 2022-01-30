import {splitString} from './utils/utils'

test("Return mutated string", () => {
    const str = 'This is a sample string with $1 and $2'
    const obj = {$1:{type: "value", values: [-3, -1, -2, -5, -10]},
                $2:{type: "value", values: [1, 2, 3, 4, 5]}
                    }
    expect(splitString(str, obj)).toBe('This is a sample string with <span style="color:blue; cursor:pointer">(-3)</span> and <span style="color:blue; cursor:pointer">(1)</span>');
});