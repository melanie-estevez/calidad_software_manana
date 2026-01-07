describe("smoke", () => {
  test("jest está configurado", () => {
    expect(true).toBe(true);
  });
  test("jest está configurado", () => {
    const num1:number=5;
    const num2:number=3;
    const resultado:number=num1+num2;
    expect(resultado).toBe(8);
  });
  test("area trapecio", () => {
    const base_mayor: number = 5;
    const base_menor: number = 3;
    const altura: number = 3;
    const resultado: number = ((base_mayor + base_menor) * altura) / 2;
    expect(resultado).toBe(12);
  });
});