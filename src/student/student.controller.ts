import { Controller, Get, Post, Put, Param, Body, ParseUUIDPipe } from "@nestjs/common";
import { CreateStudentDTO, FindStudentResponseDTO, StudentResponseDTO, UpdateStudentDTO } from "./dto/student.dto";
import { StudentService } from "./student.service";

@Controller("students")
export class StudentController {
    constructor(private readonly studentService: StudentService) {}

    @Get()
    getStudents(): FindStudentResponseDTO[] {
        return this.studentService.getStudents();
    }

    @Get("/:studentId")
    getStudentById(@Param("studentId", new ParseUUIDPipe()) studentId: string): FindStudentResponseDTO {
        return this.studentService.getStudentById(studentId);
    }

    @Post()
    createStudent(@Body() body: CreateStudentDTO): StudentResponseDTO {
        return this.studentService.createStudent(body);
    }

    @Put("/:studentId")
    updateStudentById(@Param("studentId", new ParseUUIDPipe()) studentId: string, @Body() body: UpdateStudentDTO): StudentResponseDTO {
        return this.studentService.updateStudentById(studentId, body);
    }
}
