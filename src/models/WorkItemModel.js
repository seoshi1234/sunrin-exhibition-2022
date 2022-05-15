export default class WorkItemModel{
  constructor(thumnail, title, author, tag = [], authorInfo = [], authorImage = [], workInfo, workImage = [], workURL = []) {
    this.thumnail = thumnail;
    this.title = title;
    this.author = author;
    this.tag = tag;
    this.authorInfo = authorInfo;
    this.authorImage = authorImage;
    this.workInfo = workInfo;
    this.workImage = workImage;
    this.workURL = workURL;
  }
}