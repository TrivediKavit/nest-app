import { Injectable, NestMiddleware, HttpException } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";
import { students } from "src/db";

@Injectable()
export class ValidStudentMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        console.log("ValidStudentMiddleware was called.");
        const studentId = req.params.studentId;
        const studentExists = students.some((student) => {
            return student.id === studentId;
        });
        if (!studentExists) {
            throw new HttpException("Student Not Found", 400);
        }
        next();
    }
}
