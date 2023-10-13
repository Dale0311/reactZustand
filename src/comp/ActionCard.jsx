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
function ActionCard() {
  // const addSmallCat = useAnimalStore.use.addSmallCat();
  const { addSmallCat, addBigCat } = useAnimalStore((state) => ({
    addSmallCat: state.addSmallCat,
    addBigCat: state.addBigCat,
  }));
  return (
    <Card className="border border-gray-600">
      <CardHeader>
        <CardTitle>Action</CardTitle>
        <CardDescription>Add one small cat</CardDescription>
      </CardHeader>
      <CardContent>{Math.random()}</CardContent>
      <CardFooter className="flex justify-end space-x-2">
        <Button name="smallCats" onClick={() => addSmallCat()}>
          Add 1 small cat
        </Button>
      </CardFooter>
    </Card>
  );
}
export default ActionCard;
