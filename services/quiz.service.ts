import { Injectable } from '@nestjs/common';
import { Quiz } from '../entities/quiz.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateQuizDto } from '../dto/create-quiz.dto';

@Injectable()
export class QuizService {
  constructor(
    @InjectRepository(Quiz)
    private quizRepository: Repository<Quiz>,
  ) {}
  getAllQuiz() {
    return [1, 2, 3];
  }
  async getQuizById(id: number) {
    return await this.quizRepository.findOne({
      where: { id },
      relations: {
        questions: true,
      },
    });
  }
  async createQuiz(quizdata: CreateQuizDto) {
    return await this.quizRepository.save(quizdata);
  }
}
