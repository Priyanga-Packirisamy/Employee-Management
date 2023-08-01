package com.priyanga.appdevelopment.Entity;

public class EmployeeList {
    private int employee_id;
    private String first_name;
    private String manager_name;
    private String position;
    private String dept_name;
    private String office;

    public EmployeeList() {
    }

    public EmployeeList(int employee_id, String first_name, String manager_name, String position, String dept_name, String office) {
        this.employee_id = employee_id;
        this.first_name = first_name;
        this.manager_name = manager_name;
        this.position = position;
        this.dept_name = dept_name;
        this.office = office;
    }

    public int getEmployee_id() {
        return employee_id;
    }

    public void setEmployee_id(int employee_id) {
        this.employee_id = employee_id;
    }

    public String getFirst_name() {
        return first_name;
    }

    public void setFirst_name(String first_name) {
        this.first_name = first_name;
    }

    public String getManager_name() {
        return manager_name;
    }

    public void setManager_name(String manager_name) {
        this.manager_name = manager_name;
    }

    public String getPosition() {
        return position;
    }

    public void setPosition(String position) {
        this.position = position;
    }

    public String getDept_name() {
        return dept_name;
    }

    public void setDept_name(String dept_name) {
        this.dept_name = dept_name;
    }

    public String getOffice() {
        return office;
    }

    public void setOffice(String office) {
        this.office = office;
    }
}

