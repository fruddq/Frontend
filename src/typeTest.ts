// type Frudd<Tinfo = unknown> = {
//   additionalInfo: Tinfo
//   age: number
//   lastname: string
// }
// interface PersonInfo {}

// const person1: Frudd = {
//   additionalInfo: [1, 2, ''],
//   age: 5,
//   lastname: 'string',
// }

type PersonInfo<P = unknown> = {
  firstName: string
  lastName: string
  adresses: Array<PersonAdress>
  familyMembers?: Array<PersonInfo>
} & P

interface PersonAdress {
  adress: string
  postCode: number
  city: string
  country: string
}

const Frudd: PersonInfo = {
  firstName: 'Frudd',
  lastName: 'Johansson',
  adresses: [
    { adress: 'string', postCode: 7, city: 'string', country: 'string' },
  ],
  familyMembers: [],
}

const myFn = (x: Array<PersonInfo>) => {
  x.forEach(({ firstName, familyMembers }) => {
    familyMembers?.push(Frudd)
    console.log(firstName)
  })
}
