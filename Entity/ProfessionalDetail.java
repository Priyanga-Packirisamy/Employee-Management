package com.priyanga.appdevelopment.Entity;

import jakarta.persistence.*;

@Entity
@Table(name = "professional_detail")
public class ProfessionalDetail {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int professional_id;
    @Column(name = "dept_id" , nullable = false )
    private int dept_id;
    @Column(name = "dept_name", nullable = false, length = 60)
    private String dept_name;
    @Column(name = "manager_id", nullable = false)
    private int manager_id;
    @Column(name = "manager_name", nullable = false, length = 50)
    private String manager_name;
    @Column(name = "office", nullable = false, length = 30)
    private String office;
    @Column(name = "hire_date", nullable = false)
    private String hire_date;

    @Column(name = "position")
    private String position;

    @Column(name = "salary")
    private int salary;

    public ProfessionalDetail() {

    }

    public ProfessionalDetail(int professional_id, int dept_id, String dept_name, int manager_id, String manager_name, String office, String hire_date, String position, int salary) {
        super();
        this.professional_id = professional_id;
        this.dept_id = dept_id;
        this.dept_name = dept_name;
        this.manager_id = manager_id;
        this.manager_name = manager_name;
        this.office = office;
        this.hire_date = hire_date;
        this.salary = salary;
        this.position = position;
    }

    public int getProfessional_id() {
        return professional_id;
    }

    public void setProfessional_id(int professional_id) {
        this.professional_id = professional_id;
    }

    public int getDept_id() {
        return dept_id;
    }

    public void setDept_id(int dept_id) {
        this.dept_id = dept_id;
    }

    public String getDept_name() {
        return dept_name;
    }

    public void setDept_name(String dept_name) {
        this.dept_name = dept_name;
    }

    public int getManager_id() {
        return manager_id;
    }

    public void setManager_id(int manager_id) {
        this.manager_id = manager_id;
    }

    public String getManager_name() {
        return manager_name;
    }

    public void setManager_name(String manager_name) {
        this.manager_name = manager_name;
    }

    public String getOffice() {
        return office;
    }

    public void setOffice(String office) {
        this.office = office;
    }

    public String getHire_date() {
        return hire_date;
    }

    public void setHire_date(String hire_date) {
        this.hire_date = hire_date;
    }

    public String getPosition() {
        return position;
    }

    public void setPosition(String position) {
        this.position = position;
    }

    public int getSalary() {
        return salary;
    }

    public void setSalary(int salary) {
        this.salary = salary;
    }
}
