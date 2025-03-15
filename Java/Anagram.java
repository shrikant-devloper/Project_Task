import java.util.Arrays;
import java.util.Scanner;

public class Anagram{
    public static void main(String [] args)
    {
       Scanner sc=new Scanner(System.in);

       System.out.println("Enter a first string");
       String str1=sc.nextLine();

       System.out.println("Enter a second string");
       String str2=sc.nextLine();

       char[] ch1=str1.toCharArray();
       char[] ch2=str2.toCharArray();

       boolean flag=false;

       Arrays.sort(ch1);
       Arrays.sort(ch2);

       if(Arrays.equals(ch1, ch2))
        flag=true;
        
       if(flag)
       System.out.println("Both string are Anagram");
       else
       System.out.println("Both String are not anagram");
    }
}