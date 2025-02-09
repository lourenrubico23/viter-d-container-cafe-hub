<?php


class Services
{
    public $services_aid;
    public $services_coffee_img;
    public $services_coffee_gallery;
    public $services_coffee_title;
    public $services_coffee_description;
    public $services_product_a;
    public $services_product_b;
    public $services_product_c;
    public $services_product_description_a;
    public $services_product_description_b;
    public $services_product_description_c;
    public $services_salon_title;
    public $services_salon_img;
    public $services_salon_gallery;
    public $services_salon_description_a;
    public $services_salon_description_b;
    public $services_contact;
    public $services_datetime;

    public $connection;
    public $lastInsertedId;

    public $tblServices;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblServices = "dcchv1_services";
    }

    public function readAll()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblServices} ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function create()
    {
        try {
            $sql = "insert into {$this->tblServices}";
            $sql .= "(services_coffee_img, ";
            $sql .= "services_datetime ) values ( ";
            $sql .= ":services_coffee_img, ";
            $sql .= ":services_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "services_coffee_img" => $this->services_coffee_img,
                "services_datetime" => $this->services_datetime,
            ]);
            $this->lastInsertedId = $this->connection->lastInsertId();
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function createCoffeeGallery()
    {
        try {
            $sql = "insert into {$this->tblServices}";
            $sql .= "(services_coffee_gallery, ";
            $sql .= "services_datetime ) values ( ";
            $sql .= ":services_coffee_gallery, ";
            $sql .= ":services_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "services_coffee_gallery" => $this->services_coffee_gallery,
                "services_datetime" => $this->services_datetime,
            ]);
            $this->lastInsertedId = $this->connection->lastInsertId();
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function createCoffeeServices()
    {
        try {
            $sql = "insert into {$this->tblServices}";
            $sql .= "(services_coffee_title, ";
            $sql .= "services_coffee_description, ";
            $sql .= "services_product_a, ";
            $sql .= "services_product_b, ";
            $sql .= "services_product_c, ";
            $sql .= "services_product_description_a, ";
            $sql .= "services_product_description_b, ";
            $sql .= "services_product_description_c, ";
            $sql .= "services_datetime ) values ( ";
            $sql .= ":services_coffee_title, ";
            $sql .= ":services_coffee_description, ";
            $sql .= ":services_product_a, ";
            $sql .= ":services_product_b, ";
            $sql .= ":services_product_c, ";
            $sql .= ":services_product_description_a, ";
            $sql .= ":services_product_description_b, ";
            $sql .= ":services_product_description_c, ";
            $sql .= ":services_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "services_coffee_title" => $this->services_coffee_title,
                "services_coffee_description" => $this->services_coffee_description,
                "services_product_a" => $this->services_product_a,
                "services_product_b" => $this->services_product_b,
                "services_product_c" => $this->services_product_c,
                "services_product_description_a" => $this->services_product_description_a,
                "services_product_description_b" => $this->services_product_description_b,
                "services_product_description_c" => $this->services_product_description_c,
                "services_datetime" => $this->services_datetime,
            ]);
            $this->lastInsertedId = $this->connection->lastInsertId();
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function createSalonImg()
    {
        try {
            $sql = "insert into {$this->tblServices}";
            $sql .= "(services_salon_img, ";
            $sql .= "services_datetime ) values ( ";
            $sql .= ":services_salon_img, ";
            $sql .= ":services_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "services_salon_img" => $this->services_salon_img,
                "services_datetime" => $this->services_datetime,
            ]);
            $this->lastInsertedId = $this->connection->lastInsertId();
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function createSalonGallery()
    {
        try {
            $sql = "insert into {$this->tblServices}";
            $sql .= "(services_salon_gallery, ";
            $sql .= "services_datetime ) values ( ";
            $sql .= ":services_salon_gallery, ";
            $sql .= ":services_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "services_salon_gallery" => $this->services_salon_gallery,
                "services_datetime" => $this->services_datetime,
            ]);
            $this->lastInsertedId = $this->connection->lastInsertId();
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function createSalonContents()
    {
        try {
            $sql = "insert into {$this->tblServices}";
            $sql .= "(services_coffee_title, ";
            $sql .= "services_salon_description_a, ";
            $sql .= "services_salon_description_b, ";
            $sql .= "services_contact, ";
            $sql .= "services_datetime ) values ( ";
            $sql .= ":services_coffee_title, ";
            $sql .= ":services_salon_description_a, ";
            $sql .= ":services_salon_description_b, ";
            $sql .= ":services_contact, ";
            $sql .= ":services_product_c, ";
            $sql .= ":services_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "services_coffee_title" => $this->services_coffee_title,
                "services_salon_description_a" => $this->services_salon_description_a,
                "services_salon_description_b" => $this->services_salon_description_b,
                "services_contact" => $this->services_contact,
                "services_datetime" => $this->services_datetime,
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
            $sql = "update {$this->tblServices} set ";
            $sql .= "services_coffee_img = :services_coffee_img, ";
            $sql .= "services_datetime = :services_datetime ";
            $sql .= "where services_aid = :services_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "services_coffee_img" => $this->services_coffee_img,
                "services_datetime" => $this->services_datetime,
                "services_aid" => $this->services_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function updateCoffeeGallery()
    {
        try {
            $sql = "update {$this->tblServices} set ";
            $sql .= "services_coffee_gallery = :services_coffee_gallery, ";
            $sql .= "services_datetime = :services_datetime ";
            $sql .= "where services_aid = :services_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "services_coffee_gallery" => $this->services_coffee_gallery,
                "services_datetime" => $this->services_datetime,
                "services_aid" => $this->services_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function updateCoffeeServices()
    {
        try {
            $sql = "update {$this->tblServices} set ";
            $sql .= "services_salon_title = :services_salon_title, ";
            $sql .= "services_coffee_description = :services_coffee_description, ";
            $sql .= "services_product_a = :services_product_a, ";
            $sql .= "services_product_b = :services_product_b, ";
            $sql .= "services_product_c = :services_product_c, ";
            $sql .= "services_product_description_a = :services_product_description_a, ";
            $sql .= "services_product_description_b = :services_product_description_b, ";
            $sql .= "services_product_description_c = :services_product_description_c, ";
            $sql .= "services_datetime = :services_datetime ";
            $sql .= "where services_aid = :services_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "services_salon_title" => $this->services_salon_title,
                "services_coffee_description" => $this->services_coffee_description,
                "services_product_a" => $this->services_product_a,
                "services_product_b" => $this->services_product_b,
                "services_product_b" => $this->services_product_b,
                "services_product_c" => $this->services_product_c,
                "services_product_description_a" => $this->services_product_description_a,
                "services_product_description_b" => $this->services_product_description_b,
                "services_product_description_c" => $this->services_product_description_c,
                "services_datetime" => $this->services_datetime,
                "services_aid" => $this->services_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }


    public function updateSalonImg()
    {
        try {
            $sql = "update {$this->tblServices} set ";
            $sql .= "services_salon_img = :services_salon_img, ";
            $sql .= "services_datetime = :services_datetime ";
            $sql .= "where services_aid = :services_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "services_salon_img" => $this->services_salon_img,
                "services_datetime" => $this->services_datetime,
                "services_aid" => $this->services_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function updateSalonGallery()
    {
        try {
            $sql = "update {$this->tblServices} set ";
            $sql .= "services_salon_gallery = :services_salon_gallery, ";
            $sql .= "services_datetime = :services_datetime ";
            $sql .= "where services_aid = :services_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "services_salon_gallery" => $this->services_salon_gallery,
                "services_datetime" => $this->services_datetime,
                "services_aid" => $this->services_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function updateSalonContents()
    {
        try {
            $sql = "update {$this->tblServices} set ";
            $sql .= "services_salon_title = :services_salon_title, ";
            $sql .= "services_salon_description_a = :services_salon_description_a, ";
            $sql .= "services_salon_description_b = :services_salon_description_b, ";
            $sql .= "services_contact = :services_contact, ";
            $sql .= "services_datetime = :services_datetime ";
            $sql .= "where services_aid = :services_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "services_salon_title" => $this->services_salon_title,
                "services_salon_description_a" => $this->services_salon_description_a,
                "services_salon_description_b" => $this->services_salon_description_b,
                "services_contact" => $this->services_contact,
                "services_datetime" => $this->services_datetime,
                "services_aid" => $this->services_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
