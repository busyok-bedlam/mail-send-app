declare type User = {
    fullName: string;
    email: string;
};
declare type Users = Array<User>;
export interface MessageInterface {
    theme: string;
    content: string;
    sender: User;
    receiver: User;
    carbonCopy?: Users;
    blindCarbonCopy?: Users;
}
export {};
