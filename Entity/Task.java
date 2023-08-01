package com.priyanga.appdevelopment.Entity;

import jakarta.persistence.*;

@Entity
@Table(name = "task")
public class Task {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int task_id;

    @Column(name ="employee_id" , nullable = false)
    private int employee_id;
    @Column(name ="task_title" , nullable = false , length = 50)
    private String task_title;
    @Column(name ="due_date" , nullable = false)
    private String due_date;
    @Column(name ="attach" , nullable = false)
    private String attach;
    @Column(name ="assign_head" , nullable = false)
    private String assign_head;
    public Task() {
    }

    public Task(int task_id, int employee_id, String task_title, String due_date, String attach, String assign_head) {
        super();
        this.task_id = task_id;
        this.task_title = task_title;
        this.due_date = due_date;
        this.attach = attach;
        this.employee_id = employee_id;
        this.assign_head = assign_head;
    }

    public int getTask_id() {
        return task_id;
    }

    public void setTask_id(int task_id) {
        this.task_id = task_id;
    }

    public String getTask_title() {
        return task_title;
    }

    public void setTask_title(String task_title) {
        this.task_title = task_title;
    }

    public String getDue_date() {
        return due_date;
    }

    public void setDue_date(String due_date) {
        this.due_date = due_date;
    }

    public String getAttach() {
        return attach;
    }

    public void setAttach(String attach) {
        this.attach = attach;
    }

    public int getEmployee_id() {
        return employee_id;
    }

    public void setEmployee_id(int employee_id) {
        this.employee_id = employee_id;
    }

    public String getAssign_head() {
        return assign_head;
    }

    public void setAssign_head(String assign_head) {
        this.assign_head = assign_head;
    }
}
