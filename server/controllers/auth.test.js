import bcrypt from 'bcryptjs';
import { registerUser } from "./authController.js"
import { User } from "../models/User.js"
import { Profile } from '../models/Profile.js';

const mockRequest = {
    body: {
        name: "john dow",
        email: "email@gmail.com",
        password: "password123"
    }
}

const mockResponse = () => {
    return {
        status: jest.fn().mockReturnThis(),
        json: jest.fn().mockReturnThis(),
    };
};


const mockUser = {
    _id: "59b99db4cfa9a34dcd7885b6",
    name: "john dow",
    email: "email@gmail.com",
    password: "2zaq3xsw4ced5rvf6tbg7ynh8umji,"
}

const mockProfile = {
    _id: "59b99db4cfa9a34dcd7885b",
    username: "name",
    currentTotalIncome: 0,
    goalAmount: 0,
    userId: mockUser._id,
}


jest.mock('../utils/jwt', () => ({
    createtoken: jest.fn(() => 'jwt_token'),
}));

describe("regester user", () => {
    it("should register user", async () => {
        jest.spyOn(User, "findOne").mockResolvedValueOnce(false)
        jest.spyOn(bcrypt, "hash").mockResolvedValueOnce("2zaq3xsw4ced5rvf6tbg7ynh8umji,");
        jest.spyOn(User, "create").mockResolvedValueOnce(mockUser);
        jest.spyOn(Profile, "create").mockResolvedValueOnce(mockProfile);
        console.log(mockRequest);
        
        const mockRes = mockResponse();
        await registerUser(mockRequest,mockRes);
        expect(mockRes.status).toHaveBeenCalledWith(201)
        expect(mockRes.json).toHaveBeenCalledWith({ message: 'User registered successfully', token:'jwt_token' });
    })
})