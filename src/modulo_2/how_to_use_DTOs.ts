class User {}

//DTO é uma classe de transferencia de dados, que não possui logica, mas que é que util para lidar com parametros de informação muito longos
// normalmente vc tem DTOs para store e DTOS para update, semelhante a segragação de interface, é melhor ter mais código, do que mesclar interface
class CreateUserDTO {
  constructor(
    public name: string,
    public age: number,
    public email: string,
    public document: string,
    public role: string,
    public isActive: boolean
  ) {}
}

class UserService {
  // createUser(
  //   name: string,
  //   age: number,
  //   email: string,
  //   document: string,
  //   role: string,
  //   isActive: boolean
  // ) {
  //   console.log("User created", {
  //     name,
  //     age,
  //     email,
  //     document,
  //     role,
  //     isActive,
  //   });
  // }
  // com DTO, podemos inclusive deixar o código mais coeso e enxuto
  createUser(userDto: CreateUserDTO): void {
    console.log("User created", userDto);
  }
}

const userService = new UserService();
// userService.createUser(
//     "John Doe",
//     30,
//     "john.doe@example.com",
//     "123456789",
//     "admin",
//     true
// )

const userDto = new CreateUserDTO(
  "Beagle Bolinha",
  20,
  "bolinha@bigo.com",
  "999999999",
  "DONO",
  true
);

userService.createUser(userDto);
console.log(userService);

export {};
