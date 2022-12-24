


// class Person {
//    bohjo = 'kolof'
//    constructor (name) {
//        this.name = name
//    }
//    cokal () {
//        console.log (this.name + 'Хелоу')
//    }   
// }

//const max = new Person ('Andrei') 

//max.cokal ()
//console.log (max)

// class Programer extends Person{
 //   constructor (name,job,age) {
 //       super (name)

//        this._job = job
 //       this._age = age
//    }
 //   get ages () {
  //      return this._job.tyApperCase ()
 //   }
    
 //       cokal () {
 //           super.cokal()
 //           console.log ('Help')
        
 //   }
 //}
// const milk = new Programer ( 'Andrei', 'Frontend', 25)

//console.log (milk)
//milk.cokal()
//console.log (milk.ages)


// class Util {
 //  static average (...args) {
  //      return args.reduce ((acc,i) => acc +=i, 0) /args.length
//    }
// }
// const res = Util.average (2,6,7,8,88,77)

// console.log (res)



// const symbol = Symbol ('demo')

// const obj = {
//    name: 'Andrei',
//    [symbol]: 'Meta'

// }
// console.log (obj)

//const array = [1, 3, 4, 5, 6]
//const str = 'Helloy word'
// console.log (array[Symbol.iterator])
// console.log (str[Symbol.iterator])

// const iter = array[Symbol.iterator] ()
// console.log (iter.next())
// for (let iters of str) {
//    console.log (iters)
// }

// const cotri = {
//    values: ['ru','by','en','Andrei',24,false ] ,
//    [Symbol.iterator] () {
//        let i = 0
//        return {
//            next: () => {
//                const value = this.values [i]
//                i++
//                return {
//                    done: i> this.values.length,
//                    value 
//                }
//            }
//        }
//    }
// }
// for (let item of cotri) {
//   console.log (item)
// }


// function  *gen (num = 88) {
//    for (let i = 0;  i < num; i++ ) {
//        try{
//        yield i    
//        } catch   {
//            console.log ('Eror',)
//        }
        
//    }    
// }
// const iter = gen (num = 98)
// console.log (iter.next())
// console.log (iter.next())
// console.log (iter.next())
// console.log (iter.throw('Erooy'))

// for (let i of gen (9)) {
//    console.log (i)
// }
// const names = new Promise ((resolve,rejekt) => {
//  setTimeout ( () => {
//     resolve ('Andrei')
// },2000)
// })

// const promese = ms => new Promise (((resolve,rejekt) => {
//    setTimeout (() =>{
//        resolve (`Donte! ${'Andrei'} `)},ms )
    
// }))



// promese (1000)
// .then (obj => promese (2000))
// .then (port => console.log(port))

// async function sony () {
//    const remove = await promese (1000)
//    console.log (remove)
// }
// sony()

// const enema = {
//    name: 'Andrei',
//    age:  25,
//    job: 'Frontend'
// }


//const obj = [
//    ['name', 'Andrei'],
//    ['age', 25],
//    ['job', 'Frontend']
// ]

// console.log (Object.entries(enema))
// console.log (Object.fromEntries(obj))

// const map = new Map (obj)
// console.log (map.get('name'))
// map.set ('frend', false)
// map.set (enema, 'My historu')

// console.log (map)
// map.delete ('name')
// console.log (map.has('name'))
// console.log (map.size)
// map.clear ()
// console.log (map.size)

// for (let hangs of map.entries()) {
//    console.log (hangs)

// }

// for (let [key, value] of map) {
//    console.log (key, value)
// }

// for (let bar of map.keys()) {
//    console.log(bar)
// }

// map.forEach ( (val,key,m) => {
//    console.log (val,key)
// })

// const bork = [...map]
// console.log (bork)

// const work = Array.from(map)
// const hork = Object.fromEntries(map.entries())
// console.log (hork)

// const users = [
//    {name: 'Andrei'},
//    {name: 'Artem'},
//    {name: 'Irina'},
//   {name: 'Marta'}
//]
//const visit = new Map ()

//visit
//.set (users[0], new Date())
//.set (users[1], new Date (new Date ().getTime() + 1000 * 77 ))
//.set (users[2], new Date (new Date ().getTime() + 200 * 88)) 
//.set (users[3], new Date (new Date ().getTime() + 2000 * 88)) 

//function positiv (kolim) {
//    return visit.get (kolim)
//}

// console.log (positiv (users[3]))

// console .log (visit)


// const set = new Set ( [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 5, 5, 5, 5])

// set.add (22).add (22).add(44).add(54).add(54)

// console.log(set)
// console.log (set.has(22))
// console.log (set.size)
// console.log (set.delete(99))
// console.log (set.clear())

// function nambers (namber) {
//    return Array.from (new Set(namber))

// }
// console.log (nambers([1, 1, 1, 2, 2, 2, 2, 2, 3, 4, 5, 6, 7, 7, 8] ) )

// let obj = {name: 'Andrei',}


// const map = new WeakMap ([
//    [obj, 'data']
// ])

//class Student {
//    constructor(name) {
//        this.name = name
//    }

//    greet () {
//        console.log (`Hi may name is ${this.name}`)
//    }
//}

//class Proto {
//    utiversati = 'Oxford'
//}

//const student = Reflect.construct (Student, ['Andrei'])

// console.log (student)

// console.log (student.__proto__ === Student.prototype)

// console.log (Student.prototype)

//Reflect.apply (student.greet,{name: 'Victor'}, [] )

//console.log (Reflect.ownKeys(student))

//Reflect.preventExtensions (student)

//student.age = 25
//student.lokal = 'Spartak'

//console.log (student)

//============================== Proxy

//const person = {
//    name: 'Andrei',
//    age: 25,
//    job: 'Frontend'
//}

//const op = new Proxy (person,{
//    get (target,prop){
//        return target [prop]
//    }
//    set (target,prop,value) {
//        if (prop in target) {
//          target[prop] = value
//        } else {
//            throw new Error (`No ${prop} Howwwwwwww`)
//        }
//    },
//    has (target,prop) {
//        return ['age','name','job'].includes(prop)
//    },
//    defineProperty(target,prop) {
//        console.log ('Deletinjg', prop )
//        delete target [prop]
//    }
//})
//========= function Proxy
//const log = texst => `log: ${texst}`

//const fp = new Proxy (log,{
//    apply(target,thisArg, args) {
//        console.log ('Andrei')
//        return target.apply(thisArg,args).toUpperCase ()
//    }
//})

//=============== class Proxy

//class Person {
//    constructor (name,age) {
//        this.name = name,
//        this.age = age
//    }
//}

//const PersoPerxs = new Proxy (Person, {
//    construct (target, args) {
//        console.log ('Contrakt...')

//        return new Proxy ( new target (...args)), {
//            get (milk,prop) {
//                console.log (`Good mai "${prop}"`)
//               return milk[prop]
//            }
//        }
//    }

//})

//const po = new PersoPerxs ('Andrei', 25)


//============= Praktika Proxy

const withDefaultValue = (target, defaultValue = 0) => {
    return new Proxy(target, {
      get: (obj, prop) => (prop in obj ? obj[prop] : defaultValue)
    })
  }
  
  const position = withDefaultValue(
    {
      x: 24,
      y: 42
    },
    0
  )

  const withHiddenProps = (target, prefix = '_') => {
    return new Proxy(target, {
      has: (obj, prop) => prop in obj && !prop.startsWith(prefix),
      ownKeys: obj => Reflect.ownKeys(obj).filter(p => !p.startsWith(prefix)),
      get: (obj, prop, receiver) => (prop in receiver ? obj[prop] : void 0)
    })
  }
  

 // function doHomework(subject, callback) {
//    alert(`Starting my ${subject} homework.`);
//    callback();
//  }
//  function alertFinished(){
//    alert('Finished my homework');
//  }
//  doHomework('math', alertFinished);

 const users = [
  { id: 11, name: 'Vladilen', job: 'Fullstack', age: 25 },
  { id: 22, name: 'Elena', job: 'Student', age: 22 },
  { id: 33, name: 'Victor', job: 'Backend', age: 23 },
  { id: 44, name: 'Vasilisa', job: 'Teacher', age: 24 }
]


// console.log(users.find(users =>users.id === 22))



