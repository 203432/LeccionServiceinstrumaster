export class Lesson {
  constructor(
    readonly id: string,
    readonly id_course: string,
    readonly lesson_name: string,
    readonly level: string,
    readonly stars: number,
    readonly lesson_icon: string
  ) {}
}
