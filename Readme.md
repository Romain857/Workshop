## Development

These steps are provided for development purposes only.

### Requirements

- **PHP** for the web app
- **[Composer](https://getcomposer.org/download/)** to launch app
- **MySQL** for the main data store
- **git** depending on which repositories you want to support

### Installation

1. Clone the repository
2. In project directory, Install dependencies:
   ```bash
   composer install
   ```
3. Create database:
    - Create User and password that are in `config.php`
4. Import the database schema

### Launch

In Visual Studio, install extensions `PHP Intelephense` and `PHP Server`

Right click in index.php on `PHP Server : Serve Project`

You should now be able to access the site, create a user, etc.