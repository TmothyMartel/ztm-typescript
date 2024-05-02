// jest test runner
// file name needs to have the same file name with .test.ts

import { concat, div, failedString, slowString } from "./strings";

it('should say "Hello, world!"', () => {
    expect(
        concat("Hello,", " world!")
    ).toEqual("Hello, world!");
});

it("Should divide", () => {
    expect(div(10,2)).toEqual(5);
})

it("Should fail to divide by 0", () => {
    expect(() => div(10,0)).toThrow();
})

test("slow string fetches sample text", async () => {
    slowString()
    .then((data) => expect(data).toEqual("sample"))
    .catch((err) => expect(err).toBeUndefined());
})

test("fasiled string fails whith a 'whoops'", async () => {
    failedString()
    .then((data) => expect(data).toBeUndefined())
    .catch((err) => expect(err).toEqual("whoops"));
})