import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Question } from '../entities/question.entity';
import { CreateQuestionDto } from '../dto/create-question.dto';
import { Quiz } from '../entities/quiz.entity';

@Injectable()
export class QuestionService {
  constructor(
    @InjectRepository(Question)
    private questionRepository: Repository<Question>,
  ) {}
  getAllQuestion() {
    return [1, 2, 3];
  }

  async createQuestion(question: CreateQuestionDto, quiz: Quiz) {
    const newQuestion = await this.questionRepository.save({
      question: question.question,
    });

    quiz.questions = [...quiz.questions, newQuestion];
    await quiz.save();
    return newQuestion;
  }
}
