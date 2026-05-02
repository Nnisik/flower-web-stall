import useCart from "../store/useCart";
import ProductProp from "../types/ProductProp.ts";

interface ITest {
    input: ProductProp[],
    output: [number, ProductProp[]]
}

describe("init", () => {
    test(`Case: Initial state is correct (count: 0, items: [])`, () => {
        const { count, items } = useCart.getState();
        const actual = {
            count: count,
            items: items,
        };
        expect(actual).toEqual({count: 0, items: []});
    });
});

describe("add", () => {

    const testCases:{case:string, data:ITest}[] = [{
        case: "add() increases count and adds item to array",
        data: {
            input: [],
            output: [0, []]
        }
    },{
        case: "add() increases count and adds item to array",
        data: {
            input: [{id: 1, header: "Product 1", description: "", type: "product", price: 15, image: "",}],
            output: [ 1, [{id: 1, header: "Product 1", description: "", type: "product", price: 15, image: ""}]]
        }
    },{
        case: "Multiple additions work correctly",
        data: {
            input: [
                {id: 1, header: "Product 1", description: "", type: "product", price: 15, image: "",},
                {id: 1, header: "Product 1", description: "", type: "product", price: 15, image: "",}
            ],
            output: [ 2, [
                {id: 1, header: "Product 1", description: "", type: "product", price: 15, image: "",},
                {id: 1, header: "Product 1", description: "", type: "product", price: 15, image: "",}
            ]]
        }
    },];

    testCases.forEach((testCase) => {
        test(`Case: ${testCase.case}`, () => {
            testCase.data.input.forEach((item) => {
                useCart.getState().add(item);
            })
            const { count, items } = useCart.getState();
            const actual = [count, items];
            expect(actual).toEqual(testCase.data.output)
            useCart.getState().empty();
        });
    });
});

describe("empty", () => {
    test("Case: Multiple additions work correctly", () => {
        const item:ProductProp = {id: 1, header: "Product 1", description: "", type: "product", price: 15, image: "",}
        useCart.getState().add(item);
        useCart.getState().empty();
        const { count, items } = useCart.getState();
        const actual = [count, items];
        expect(actual).toEqual([0, []])
        useCart.getState().empty();
    });
});