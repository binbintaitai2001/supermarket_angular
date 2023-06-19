export class ResponseObjectEntity<T> {
  constructor(public data: T, public response: Response) {}
}

export class Response {
  constructor(public message: string, public result: string) {}
}
