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