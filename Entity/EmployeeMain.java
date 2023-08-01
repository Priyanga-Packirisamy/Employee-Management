package com.priyanga.appdevelopment.Entity;

import jakarta.persistence.*;

@Entity
@Table(name = "employee_main")
public class EmployeeMain {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int employee_id;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "fpersonalid")
    private PersonalDetail personalDetail;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "fcontact")
    private ContactDetail contactDetail;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "fprofessional")
    private ProfessionalDetail professionalDetail;

    public EmployeeMain() {
    }

    public EmployeeMain(int employee_id, PersonalDetail personalDetail, ContactDetail contactDetail, ProfessionalDetail professionalDetail) {
        super();
        this.employee_id = employee_id;
        this.personalDetail = personalDetail;
        this.contactDetail = contactDetail;
        this.professionalDetail = professionalDetail;
    }

    public int getEmployee_id() {
        return employee_id;
    }

    public void setEmployee_id(int employee_id) {
        this.employee_id = employee_id;
    }

    public PersonalDetail getPersonalDetail() {
        return personalDetail;
    }

    public void setPersonalDetail(PersonalDetail personalDetail) {
        this.personalDetail = personalDetail;
    }

    public ContactDetail getContactDetail() {
        return contactDetail;
    }

    public void setContactDetail(ContactDetail contactDetail) {
        this.contactDetail = contactDetail;
    }

    public ProfessionalDetail getProfessionalDetail() {
        return professionalDetail;
    }

    public void setProfessionalDetail(ProfessionalDetail professionalDetail) {
        this.professionalDetail = professionalDetail;
    }
}
