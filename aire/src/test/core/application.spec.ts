import {Id} from "aire/core/dom";
class A {

    @Id()
    id1: string;

}

test("id increments as expected on instance", () => {

    let a = new A();
    console.log(a.id1);
    expect(a.id1).toContain('aire-');
});

test('id increments across instantiations of same type', () => {

    let a1 = new A(),
        a2 = new A();

    expect(a1.id1).toContain('aire-');
    expect(a1.id1).not.toEqual(a2.id1);

    for(let i = 0; i < 10; i++) {
        console.log(a1.id1);
    }
});