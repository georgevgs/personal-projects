public class Dog {
  String breed;
  boolean hasOwner;
  int age;
  char gender;
  
  public Dog(String dogBreed, boolean dogOwned, int dogYears, char dogGender) {
    breed = dogBreed;
    hasOwner = dogOwned;
    age = dogYears;
    gender = dogGender;
  }
  
  public static void main(String[] args) {
    System.out.println("*********************************************************");
    Dog fido = new Dog("poodle", false, 4, 'F');
    Dog nunzio = new Dog("shiba inu", true, 12, 'M');
    Dog mitsos = new Dog("husky", false, 10, 'M');
    
    boolean isFidoOlder = fido.age > nunzio.age;
    int totalDogYears = nunzio.age + fido.age + mitsos.age;
    
    System.out.println("Three dogs created: a " + fido.breed + ", a " + nunzio.breed + " and a " + mitsos.breed);
    System.out.println("The statement that fido is an older dog is: " + isFidoOlder);
    System.out.println("The total age of the dogs is: " + totalDogYears);
    System.out.println("Mitsos is " + mitsos.gender);
    System.out.println("*********************************************************");
  }
}
