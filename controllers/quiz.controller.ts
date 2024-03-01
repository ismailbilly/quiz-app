import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  ParseIntPipe,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { QuizService } from '../services/quiz.service';
import { CreateQuizDto } from '../dto/create-quiz.dto';

@Controller('quiz')
export class QuizContoller {
  constructor(private readonly quizService: QuizService) {}

  @Get('/')
  getAllQuiz() {
    return this.quizService.getAllQuiz();
  }
  @Get('/:id')
  async getAllQuizById(@Param('id', ParseIntPipe) id: number) {
    return await this.quizService.getQuizById(id);
  }

  @HttpCode(200)
  @Post('/create')
  @UsePipes(ValidationPipe)
  async createQuiz(@Body() quizdata: CreateQuizDto) {
    return await this.quizService.createQuiz(quizdata);
  }
}
