import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { User } from "./entity/User";
import { hash } from "bcryptjs";

@Resolver()
export class UserResolver {
  @Query(() => String)
  hello() {
    return "hi !";
  }

  @Query(() => [User])
  users() {
    return User.find();
  }

  @Mutation(() => Boolean)
  async register(
    @Arg("email") email: string,
    @Arg("password") password: string
  ) {
    try {
      const hashedPassword = await hash(password, 7);

      await User.insert({
        email,
        password: hashedPassword,
      });
    } catch (error) {
      console.log(error);
      return false;
    }
    return true;
  }
}
