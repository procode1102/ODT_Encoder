//creating base and derived classes.


/*
 * A derived class (or subclass) is a class that is derived 
 * from another class, called a base class (or superclass). Any class may serve as a base class.
 * 
 * The derived class is said to inherit the properties of the base class, a concept called inheritance.
 * 
 * An object declared of a derived class type has access to all the public 
 * members of the derived class as well as the public members of the base class. 
 * 
 *  - class memebers - properties and methods.
 * 
 * A derived class is declared by placing the keyword extends after the derived class name, followed by the base class name.
 * 
 *      - Ex: class DerivedClass extends BaseClass { ... }.
 * 
 *      - unique class members > created by the derived class.\
 *  
 *      - fields initialization can inherit members from a base class while creating unique fields within the derived class.
 * 
 * Inheritance scenarios
 * 
 * A derived class can serve as a base class for another class. Ex: class FruitItem extends ProduceItem {...} 
 * creates a derived class FruitItem from ProduceItem, which was derived from GenericItem.
 * 
 * A class can serve as a base class for multiple derived classes. Ex: class FrozenFoodItem extends GenericItem {...} 
 * creates a derived class FrozenFoodItem that inherits from GenericItem, just as ProduceItem inherits from GenericItem.
 * 
 * 
 * A class can only be derived from one base class directly. 
 * Ex: Inheriting from two classes as in class House extends Dwelling, Property {...} results in a compiler error.
 * 
 * 
 * 
 * 
 */

//base class
public class DerivedClasses {
    
    private String engSpec;

    public void setEngType(String engSpecSet) {
        engSpec = engSpecSet;
    }

    public void printEngSpec() {
        System.out.println(engSpec);
     }

//derived class
public class ProduceSwEng extends DerivedClasses { 
    private String swEng;
 
    public void setSwEng(String swEngSet) {
       swEng = swEngSet;
    }
    
    public String getSwEng() {
       return swEng;
    }  
 }


 // Using DerivedClasses and ProduceSwEng objects.
 public class ClassDerivationEx{
    public static void main (String[] args){

    }
 }

}