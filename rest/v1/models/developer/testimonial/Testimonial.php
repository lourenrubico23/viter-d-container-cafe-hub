<?php


class Testimonial
{
    public $testimonial_aid;
    public $testimonial_title;
    public $testimonial_subtitle;
    public $testimonial_client_img_a;
    public $testimonial_client_img_b;
    public $testimonial_client_img_c;
    public $testimonial_client_name_a;
    public $testimonial_client_name_b;
    public $testimonial_client_name_c;
    public $testimonial_client_message_a;
    public $testimonial_client_message_b;
    public $testimonial_client_message_c;
    public $testimonial_datetime;

    public $connection;
    public $lastInsertedId;

    public $tblTestimonial;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblTestimonial = "dcchv1_testimonial";
    }

    public function readAll()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblTestimonial} ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function create()
    {
        try {
            $sql = "insert into {$this->tblTestimonial}";
            $sql .= "(testimonial_title, ";
            $sql .= "testimonial_subtitle, ";
            $sql .= "testimonial_datetime ) values ( ";
            $sql .= ":testimonial_title, ";
            $sql .= ":testimonial_subtitle, ";
            $sql .= ":testimonial_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "testimonial_title" => $this->testimonial_title,
                "testimonial_subtitle" => $this->testimonial_subtitle,
                "testimonial_datetime" => $this->testimonial_datetime,
            ]);
            $this->lastInsertedId = $this->connection->lastInsertId();
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function createTestimonialA()
    {
        try {
            $sql = "insert into {$this->tblTestimonial}";
            $sql .= "(testimonial_client_img_a, ";
            $sql .= "testimonial_client_name_a, ";
            $sql .= "testimonial_client_message_a, ";
            $sql .= "testimonial_datetime ) values ( ";
            $sql .= ":testimonial_client_img_a, ";
            $sql .= ":testimonial_client_name_a, ";
            $sql .= ":testimonial_client_message_a, ";
            $sql .= ":testimonial_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "testimonial_client_img_a" => $this->testimonial_client_img_a,
                "testimonial_client_name_a" => $this->testimonial_client_name_a,
                "testimonial_client_message_a" => $this->testimonial_client_message_a,
                "testimonial_datetime" => $this->testimonial_datetime,
            ]);
            $this->lastInsertedId = $this->connection->lastInsertId();
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function createTestimonialB()
    {
        try {
            $sql = "insert into {$this->tblTestimonial}";
            $sql .= "(testimonial_client_img_b, ";
            $sql .= "testimonial_client_name_b, ";
            $sql .= "testimonial_client_message_b, ";
            $sql .= "testimonial_datetime ) values ( ";
            $sql .= ":testimonial_client_img_b, ";
            $sql .= ":testimonial_client_name_b, ";
            $sql .= ":testimonial_client_message_b, ";
            $sql .= ":testimonial_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "testimonial_client_img_b" => $this->testimonial_client_img_b,
                "testimonial_client_name_b" => $this->testimonial_client_name_b,
                "testimonial_client_message_b" => $this->testimonial_client_message_b,
                "testimonial_datetime" => $this->testimonial_datetime,
            ]);
            $this->lastInsertedId = $this->connection->lastInsertId();
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function createTestimonialC()
    {
        try {
            $sql = "insert into {$this->tblTestimonial}";
            $sql .= "(testimonial_client_img_c, ";
            $sql .= "testimonial_client_name_c, ";
            $sql .= "testimonial_client_message_c, ";
            $sql .= "testimonial_datetime ) values ( ";
            $sql .= ":testimonial_client_img_c, ";
            $sql .= ":testimonial_client_name_c, ";
            $sql .= ":testimonial_client_message_c, ";
            $sql .= ":testimonial_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "testimonial_client_img_c" => $this->testimonial_client_img_c,
                "testimonial_client_name_c" => $this->testimonial_client_name_c,
                "testimonial_client_message_c" => $this->testimonial_client_message_c,
                "testimonial_datetime" => $this->testimonial_datetime,
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
            $sql = "update {$this->tblTestimonial} set ";
            $sql .= "testimonial_title = :testimonial_title, ";
            $sql .= "testimonial_datetime = :testimonial_datetime ";
            $sql .= "where testimonial_aid = :testimonial_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "testimonial_title" => $this->testimonial_title,
                "testimonial_datetime" => $this->testimonial_datetime,
                "testimonial_aid" => $this->testimonial_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function updateTestimonialA()
    {
        try {
            $sql = "update {$this->tblTestimonial} set ";
            $sql .= "testimonial_client_img_a = :testimonial_client_img_a, ";
            $sql .= "testimonial_client_name_a = :testimonial_client_name_a, ";
            $sql .= "testimonial_client_message_a = :testimonial_client_message_a, ";
            $sql .= "testimonial_datetime = :testimonial_datetime ";
            $sql .= "where testimonial_aid = :testimonial_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "testimonial_client_img_a" => $this->testimonial_client_img_a,
                "testimonial_client_name_a" => $this->testimonial_client_name_a,
                "testimonial_client_message_a" => $this->testimonial_client_message_a,
                "testimonial_datetime" => $this->testimonial_datetime,
                "testimonial_aid" => $this->testimonial_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }


    public function updateTestimonialB()
    {
        try {
            $sql = "update {$this->tblTestimonial} set ";
            $sql .= "testimonial_client_img_b = :testimonial_client_img_b, ";
            $sql .= "testimonial_client_name_b = :testimonial_client_name_b, ";
            $sql .= "testimonial_client_message_b = :testimonial_client_message_b, ";
            $sql .= "testimonial_datetime = :testimonial_datetime ";
            $sql .= "where testimonial_aid = :testimonial_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "testimonial_client_img_b" => $this->testimonial_client_img_b,
                "testimonial_client_name_b" => $this->testimonial_client_name_b,
                "testimonial_client_message_b" => $this->testimonial_client_message_b,
                "testimonial_datetime" => $this->testimonial_datetime,
                "testimonial_aid" => $this->testimonial_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function updateTestimonialC()
    {
        try {
            $sql = "update {$this->tblTestimonial} set ";
            $sql .= "testimonial_client_img_c = :testimonial_client_img_c, ";
            $sql .= "testimonial_client_name_c = :testimonial_client_name_c, ";
            $sql .= "testimonial_client_message_c = :testimonial_client_message_c, ";
            $sql .= "testimonial_datetime = :testimonial_datetime ";
            $sql .= "where testimonial_aid = :testimonial_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "testimonial_client_img_c" => $this->testimonial_client_img_c,
                "testimonial_client_name_c" => $this->testimonial_client_name_c,
                "testimonial_client_message_c" => $this->testimonial_client_message_c,
                "testimonial_datetime" => $this->testimonial_datetime,
                "testimonial_aid" => $this->testimonial_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
