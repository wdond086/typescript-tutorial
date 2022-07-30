# ADVANCED TYPESCRIPT TUTORIAL

Notes based on Advanced Typescript tutorials from [`Matt Pocock`](https://www.youtube.com/watch?v=lMfGp29Ht8c&amp;list=PLIvujZeVDLMx040-j1W4WFs1BxuTGdI_b&amp;ab_channel=MattPocock)

## 1.) When to use a generic

- When you truly do not know what type is going to be passed to a function.
- When you have things in the function that rely on knowing the type of the parameter.
- Refer to [`whent-to-use-a-generic.ts`](./when-to-use-a-generic.ts)

```ts
interface Animal {
    name: string;
}

interface Human {
    firstName: string;
    lastName: string;
}

/**
 * EXPLANATION
 * 
 * You are creating a type called AnimalOrHuman which takes a generic, T that extends either 'Human' or 'Animal'.
 * If T extends Human, then AnimalOrHuman will be of type { humanName: string }.
 * Otherwise, AnimalOrHuman will be of type { animalName: string } and as such, you can use it as a return type later as shown below.
 */
type AnimalOrHuman<T extends Human | Animal> = T extends Human ? { humanName: string } : { animalName: string };

export const getDisplayName = <TItem extends Animal | Human>(
    item: TItem
): TItem extends Human ? { humanName: string } : { animalName: string } => {
    if ("name" in item) {
        return {
            animalName: item.name,
        } as AnimalOrHuman<TItem>;
    } else {
        return {
            humanName: item.firstName,
        } as AnimalOrHuman<TItem>;
    }
};

const result = getDisplayName({
    name: "Patch",
});
const result2 = getDisplayName({
    firstName: "Matt",
    lastName: "Pocock",
});
```

## 2.) Remove a member of a union type

- Explains how to remove one of the types associated to a union type.
- Typescript does this automatically using _**distributivity**_.
- In the case of where the generic extends the class we want to remove, we return _**never**_.
- Now, `WowWithoutC` can never be of type `c`.

```ts
export type Letters = "a" | "b" | "c";

type RemoveC<TType> = TType extends "c" ? never : TType;

type WowWithoutC = RemoveC<Letters>;
```

- We can even completely replace it with something else.

```ts
export type Letters = "a" | "b" | "c";

type ReplaceCWithD<T> = T extends "c" ? "d" : T;

type WoWwithD = ReplaceCWithD<Letters>;
```
