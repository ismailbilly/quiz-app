import { IsNotEmpty, Length } from 'class-validator';

export class CreateQuestionDto {
  @IsNotEmpty({ message: 'Question is required' })
  @Length(3, 255)
    question: string;
    
    @IsNotEmpty()
    quizId: number;


}
