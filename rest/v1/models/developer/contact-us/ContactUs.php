<?php


class ContactUs
{
    public $contact_us_aid;
    public $contact_us_description;
    public $contact_us_button;
    public $contact_us_form_title;
    public $contact_us_datetime;


    public $connection;
    public $lastInsertedId;

    public $tblContactUs;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblContactUs = "dcchv1_contact_us";
    }

    public function readAll()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblContactUs} ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function create()
    {
        try {
            $sql = "insert into {$this->tblContactUs}";
            $sql .= "(contact_us_description, ";
            $sql .= "contact_us_button, ";
            $sql .= "contact_us_datetime ) values ( ";
            $sql .= ":contact_us_description, ";
            $sql .= ":contact_us_button, ";
            $sql .= ":contact_us_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "contact_us_description" => $this->contact_us_description,
                "contact_us_button" => $this->contact_us_button,
                "contact_us_datetime" => $this->contact_us_datetime,
            ]);
            $this->lastInsertedId = $this->connection->lastInsertId();
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function createFormTitle()
    {
        try {
            $sql = "insert into {$this->tblContactUs}";
            $sql .= "(contact_us_form_title, ";
            $sql .= "contact_us_datetime ) values ( ";
            $sql .= ":contact_us_form_title, ";
            $sql .= ":contact_us_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "contact_us_form_title" => $this->contact_us_form_title,
                "contact_us_datetime" => $this->contact_us_datetime,
            ]);
            $this->lastInsertedId = $this->connection->lastInsertId();
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function update()
    {
        try {
            $sql = "update {$this->tblContactUs} set ";
            $sql .= "contact_us_description = :contact_us_description, ";
            $sql .= "contact_us_button = :contact_us_button, ";
            $sql .= "contact_us_datetime = :contact_us_datetime ";
            $sql .= "where contact_us_aid = :contact_us_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "contact_us_description" => $this->contact_us_description,
                "contact_us_button" => $this->contact_us_button,
                "contact_us_datetime" => $this->contact_us_datetime,
                "contact_us_aid" => $this->contact_us_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function updateFormTitle()
    {
        try {
            $sql = "update {$this->tblContactUs} set ";
            $sql .= "contact_us_form_title = :contact_us_form_title, ";
            $sql .= "contact_us_datetime = :contact_us_datetime ";
            $sql .= "where contact_us_aid = :contact_us_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "contact_us_form_title" => $this->contact_us_form_title,
                "contact_us_datetime" => $this->contact_us_datetime,
                "contact_us_aid" => $this->contact_us_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
