import java.util.ArrayList;
import java.util.List;

class Employee {
    private Integer eid;
    private String ename;
    private Double salary;
    public Integer getEid() {
        return eid;
    }
    public void setEid(Integer eid) {
        this.eid = eid;
    }
    public String getEname() {
        return ename;
    }
    public void setEname(String ename) {
        this.ename = ename;
    }
    public Double getSalary() {
        return salary;
    }
    public void setSalary(Double salary) {
        this.salary = salary;
    }
    public Employee(Integer eid, String ename, Double salary) {
        this.eid = eid;
        this.ename = ename;
        this.salary = salary;
    }
    public Employee() {
    }
    
    public String displayDetails() {
        return "Employee [eid=" + eid + ", ename=" + ename + ", salary=" + salary + "]";
    } 
}


public class EmployeeManagement {

    public static void main(String[] args) {
        Employee emp1=new Employee(1, "Shrikant", 25000.0);
        Employee emp2=new Employee(2, "Shubham", 20000.0);
        Employee emp3=new Employee(3, "Umakant", 15000.0);

        List<Employee> list=new ArrayList<>();
        list.add(emp1);
        list.add(emp2);
        list.add(emp3);
        for (Employee employee : list) {
            System.out.println(employee.displayDetails());
        }
    }
}