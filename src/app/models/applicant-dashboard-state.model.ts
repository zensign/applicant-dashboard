export class Question {
	public text: string;
	public answer: string;

	constructor (data:any) {
    this.text = data.text || ''; 
    this.answer = data.answer || '';
  }
}

export class Applicant {

  public id: number;
  public name: string;
  public position: string;
  public applied: Date;
  public experience: string;
  public availability: Object;
  public favorited: boolean = false;
  public questions: Array<Question> = [];

  constructor (data:any, favoriteIds:Array<string>) {
    this.id = data.id || 0; 
    this.name = data.name || '';
    this.position = data.position || '';
    this.applied = data.applied ? new Date(data.applied) : null;
    this.experience = data.experience || '';
    this.availability = data.availability || {};
    this.favorited = favoriteIds.includes(this.id.toString());

    for(let question of data.questions) {
      this.questions.push(new Question(question));
    }
  }
}

export class ApplicantList {

  public applicants: Array<Applicant> = [];

  constructor (data:any, favoriteIds:Array<string>) {
    for(let applicant of data) {
      this.applicants.push(new Applicant(applicant, favoriteIds));
    }
  }
}

export class ApplicantDashboardState {

  public loading: boolean = false;
  public applicantList: ApplicantList;
}
