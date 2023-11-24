
import java.sql.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

class Paciente {
    private int id;
    private String nombre;
    private int edad;
    private String diagnostico;
    private String estado;

    // Constructor
    public Paciente(int id, String nombre, int edad, String diagnostico, String estado) {
        this.id = id;
        this.nombre = nombre;
        this.edad = edad;
        this.diagnostico = diagnostico;
        this.estado = estado;
    }

    // Métodos getters
    public int getId() {
        return id;
    }

    public String getNombre() {
        return nombre;
    }

    public int getEdad() {
        return edad;
    }

    public String getDiagnostico() {
        return diagnostico;
    }

    public String getEstado() {
        return estado;
    }

    @Override
    public String toString() {
        return "ID: " + id + ", Nombre: " + nombre + ", Edad: " + edad + ", Diagnóstico: " + diagnostico + ", Estado: " + estado;
    }
}

public class HospitalApp {
    private static final String URL = "jdbc:mysql://localhost:3306/hospital";
    private static final String USER = "root";
    private static final String PASSWORD = "";

    public static void main(String[] args) {
        List<Paciente> listaPacientes = new ArrayList<>();
        cargarPacientesDesdeBD(listaPacientes);

        System.out.println("Lista de pacientes:");
        for (Paciente paciente : listaPacientes) {
            System.out.println(paciente);
        }

        Scanner scanner = new Scanner(System.in);
        System.out.println("\nOpciones:\n1. Agregar paciente\n2. Buscar paciente\n3. Actualizar paciente\n4. Eliminar paciente\n5. Pacientes en cirugía\n6. Pacientes que salieron de cirugía\n7. Pacientes en urgencias\n8. Pacientes hospitalizados");
        System.out.print("Ingrese el número de la opción deseada: ");
        int opcion = scanner.nextInt();
        scanner.nextLine(); // Consumir la nueva línea

        switch (opcion) {
            case 1:
                agregarPaciente(scanner, listaPacientes);
                break;
            case 2:
                buscarPaciente(scanner, listaPacientes);
                break;
            case 3:
                actualizarPaciente(scanner, listaPacientes);
                break;
            case 4:
                eliminarPaciente(scanner, listaPacientes);
                break;
            case 5:
                mostrarPacientesPorEstado(listaPacientes, "Cirugía");
                break;
            case 6:
                mostrarPacientesPorEstado(listaPacientes, "Salida de Cirugía");
                break;
            case 7:
                mostrarPacientesPorEstado(listaPacientes, "Urgencias");
                break;
            case 8:
                mostrarPacientesPorEstado(listaPacientes, "Hospitalizado");
                break;
            default:
                System.out.println("Opción no válida.");
        }

        System.out.println("\nLista actualizada de pacientes:");
        for (Paciente paciente : listaPacientes) {
            System.out.println(paciente);
        }

        scanner.close();
    }

    private static void cargarPacientesDesdeBD(List<Paciente> listaPacientes) {
        try (Connection connection = DriverManager.getConnection(URL, USER, PASSWORD);
             Statement statement = connection.createStatement();
             ResultSet resultSet = statement.executeQuery("SELECT * FROM pacientes")) {

            while (resultSet.next()) {
                int id = resultSet.getInt("id");
                String nombre = resultSet.getString("nombre");
                int edad = resultSet.getInt("edad");
                String diagnostico = resultSet.getString("diagnostico");
                String estado = resultSet.getString("estado");

                listaPacientes.add(new Paciente(id, nombre, edad, diagnostico, estado));
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    private static void agregarPaciente(Scanner scanner, List<Paciente> listaPacientes) {
        System.out.print("Ingrese el nombre del paciente: ");
        String nombre = scanner.nextLine();

        System.out.print("Ingrese la edad del paciente: ");
        int edad = scanner.nextInt();
        scanner.nextLine(); // Consumir la nueva línea

        System.out.print("Ingrese el diagnóstico del paciente: ");
        String diagnostico = scanner.nextLine();

        System.out.print("Ingrese el estado del paciente (Cirugía, Salida de Cirugía, Urgencias, Hospitalizado): ");
        String estado = scanner.nextLine();

        try (Connection connection = DriverManager.getConnection(URL, USER, PASSWORD);
             PreparedStatement preparedStatement = connection.prepareStatement("INSERT INTO pacientes (nombre, edad, diagnostico, estado) VALUES (?, ?, ?, ?)")) {

            preparedStatement.setString(1, nombre);
            preparedStatement.setInt(2, edad);
            preparedStatement.setString(3, diagnostico);
            preparedStatement.setString(4, estado);

            preparedStatement.executeUpdate();

            cargarPacientesDesdeBD(listaPacientes);
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    private static void buscarPaciente(Scanner scanner, List<Paciente> listaPacientes) {
        System.out.print("Ingrese el ID del paciente a buscar: ");
        int idBuscado = scanner.nextInt();

        for (Paciente paciente : listaPacientes) {
            if (paciente.getId() == idBuscado) {
                System.out.println("Paciente encontrado:\n" + paciente);
                return;
            }
        }

        System.out.println("Paciente no encontrado.");
    }

    private static void actualizarPaciente(Scanner scanner, List<Paciente> listaPacientes) {
        System.out.print("Ingrese el ID del paciente a actualizar: ");
        int idActualizar = scanner.nextInt();

        for (Paciente paciente : listaPacientes) {
            if (paciente.getId() == idActualizar) {
                System.out.println("Ingrese los nuevos detalles del paciente:");

                System.out.print("Nuevo nombre: ");
                String nuevoNombre = scanner.nextLine();

                System.out.print("Nueva edad: ");
                int nuevaEdad = scanner.nextInt();
                scanner.nextLine(); // Consumir la nueva línea

                System.out.print("Nuevo diagnóstico: ");
                String nuevoDiagnostico = scanner.nextLine();

                System.out.print("Nuevo estado (Cirugía, Salida de Cirugía, Urgencias, Hospitalizado): ");
                String nuevoEstado = scanner.nextLine();

                try (Connection connection = DriverManager.getConnection(URL, USER, PASSWORD);
                     PreparedStatement preparedStatement = connection.prepareStatement("UPDATE pacientes SET nombre=?, edad=?, diagnostico=?, estado=? WHERE id=?")) {

                    preparedStatement.setString(1, nuevoNombre);
                    preparedStatement.setInt(2, nuevaEdad);
                    preparedStatement.setString(3, nuevoDiagnostico);
                    preparedStatement.setString(4, nuevoEstado);
                    preparedStatement.setInt(5, idActualizar);

                    preparedStatement.executeUpdate();

                    cargarPacientesDesdeBD(listaPacientes);

                    System.out.println("Paciente actualizado correctamente.");
                } catch (SQLException e) {
                    e.printStackTrace();
                }

                return;
            }
        }

        System.out.println("Paciente no encontrado.");
    }

    private static void eliminarPaciente(Scanner scanner, List<Paciente> listaPacientes) {
        System.out.print("Ingrese el ID del paciente a eliminar: ");
        int idEliminar = scanner.nextInt();

        for (Paciente paciente : listaPacientes) {
            if (paciente.getId() == idEliminar) {
                try (Connection connection = DriverManager.getConnection(URL, USER, PASSWORD);
                     PreparedStatement preparedStatement = connection.prepareStatement("DELETE FROM pacientes WHERE id=?")) {

                    preparedStatement.setInt(1, idEliminar);

                    preparedStatement.executeUpdate();

                    cargarPacientesDesdeBD(listaPacientes);

                    System.out.println("Paciente eliminado correctamente.");
                } catch (SQLException e) {
                    e.printStackTrace();
                }

                return;
            }
        }

        System.out.println("Paciente no encontrado.");
    }

    private static void mostrarPacientesPorEstado(List<Paciente> listaPacientes, String estado) {
        System.out.println("Pacientes en " + estado + ":");
        for (Paciente paciente : listaPacientes) {
            if (paciente.getEstado().equalsIgnoreCase(estado)) {
                System.out.println(paciente);
            }
        }
    }
}