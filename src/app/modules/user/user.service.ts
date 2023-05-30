import { IUser } from "./user.interface";
import User from "./user.model";

export const createUserToDb = async (payload: IUser): Promise<IUser> => {
    // const user = await new User({
    //     id: 805,
    //     role: "student",
    //     password: 'jakanaka',
    //     name: {
    //         firstName: 'Mr. Test',
    //         lastName: 'Paul',
    //     },
    //     dateOfBirth: '02-08-1997',
    //     gender: "male",
    //     email: 'shimulpaul59@gmail.com',
    //     contactNo: '01872571319',
    //     emergencyContactNo: '01980476855',
    //     presentAddress: 'Uttara, Dhaka',
    //     permanentAddress: 'Arpara, Magura',
    // });
    const user = new User(payload);
    await user.save();
    console.log(user);
    console.log(user.fullName()); // custom instance method
    return user;
};

export const getUsersFromDb = async (): Promise<IUser[]> => {
    const users = await User.find();
    return users;
};

export const getUserByIdFromDb = async (payload: string): Promise<IUser | null> => {
    const user = await User.findOne({ id: payload }, { name: 1, contactNo: 1 });
    return user;
};

export const getAllAdminUsersFromDb = async () => {
    //class -> attach ->method ->directly call using class
    const admins = await User.getAdminUsers();
    return admins;
};