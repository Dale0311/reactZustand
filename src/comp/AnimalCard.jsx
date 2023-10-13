import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import useAnimalStore from "../store/animalStore";
function AnimalCard() {
  const cats = useAnimalStore.use.cats();
  const { smallCats, bigCats } = cats;
  const addBigCat = useAnimalStore.use.addBigCat();
  const addSmallCat = useAnimalStore.use.addSmallCat();
  const getAllCatsCount = useAnimalStore.use.getAllCatsCount();
  const addOneToEachCat = useAnimalStore.use.addOneToEachCat();
  const total = getAllCatsCount();
  return (
    <Card className="border border-gray-600">
      <CardHeader>
        <CardTitle>Cats</CardTitle>
        <CardDescription>Total number of cats: {total}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>small cats: {smallCats}</p>
        <p>big cats: {bigCats}</p>
        <p>{Math.random()}</p>
      </CardContent>
      <CardFooter className="flex justify-end space-x-2">
        <Button name="smallCats" onClick={() => addSmallCat()}>
          Add 1 small cat
        </Button>
        <Button name="bigCats" onClick={() => addBigCat()}>
          Add 1 big cat
        </Button>
        <Button name="bigCats" onClick={() => addOneToEachCat()}>
          Add 1 to each
        </Button>
      </CardFooter>
    </Card>
  );
}

export default AnimalCard;
