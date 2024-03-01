import { Module } from '@nestjs/common';
import { QuizContoller } from './controllers/quiz.controller';
import { QuizService } from './services/quiz.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Quiz } from './entities/quiz.entity';
import { QuestionController } from './controllers/question.controller';
import { QuestionService } from './services/question.service';
import { Question } from './entities/question.entity';
@Module({
  controllers: [QuizContoller, QuestionController],
  providers: [QuizService, QuestionService],

  imports: [TypeOrmModule.forFeature([Quiz, Question])],
})
export class QuizModule {}
