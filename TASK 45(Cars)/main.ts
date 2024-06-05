function make_car(manufacture: string, model: string, ...options: [string, any][]): object {
    let Car = {
        manufacture,
        model
    };
    options.forEach(([Car, value]) =>
        Car = value);
    return Car;
}
console.log(make_car("Honda", "Civic", ["color", "Black"],["year",2020 ]));
console.log(make_car("BMW", "Ford", ["color", "Blue"],["sunroof", true ]));