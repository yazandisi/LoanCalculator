describe("Test cal monthly payments", function () {
  it("should calculate the monthly rate correctly", function () {
    const values = {
      amount: 5000,
      years: 5,
      rate: 2.7,
    };
    expect(calculateMonthlyPayment(values)).toEqual("89.18");
  });
  it("should return a result with 2 decimal places", function () {
    const values = {
      amount: 5432,
      years: 5.5,
      rate: 2.7,
    };
    expect(calculateMonthlyPayment(values)).toEqual("88.66");
  });
  it("Should tell user to fill in years if 0", function () {
    const values = {
      amount: 1000,
      years: 0,
      rate: 2.7,
    };
    expect(calculateMonthlyPayment(values)).toEqual("Please fill in Years");
  });
  it("Should tell user to fill in a rate if 0", function () {
    const values = {
      amount: 1000,
      years: 10,
      rate: 0,
    };
    expect(calculateMonthlyPayment(values)).toEqual("Please fill in a rate");
  });
  it("Should tell handle large amounts", function () {
    const values = {
      amount: 9999999999999,
      years: 5,
      rate: 2.7,
    };
    expect(calculateMonthlyPayment(values)).toEqual("178356860499.19");
  });
});
