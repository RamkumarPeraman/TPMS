// Source code is decompiled from a .class file using FernFlower decompiler.
package servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/LoginServlet")
public class LoginServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;

    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        String id = request.getParameter("id");
        String password = request.getParameter("password");

        // Database connection details
        String jdbcUrl = "jdbc:mysql://localhost:3306/ramdb";
        String dbUser = "root";
        String dbPassword = "Ramkumar@77";

        try {
            // Load JDBC driver and establish connection
            Class.forName("com.mysql.cj.jdbc.Driver");
            Connection connection = DriverManager.getConnection(jdbcUrl, dbUser, dbPassword);

            // Prepare SQL query
            String sql = "SELECT * FROM ramu WHERE id = ? AND password = ?";
            PreparedStatement statement = connection.prepareStatement(sql);
            statement.setString(1, id);
            statement.setString(2, password);

            // Execute query
            ResultSet resultSet = statement.executeQuery();

            if (resultSet.next()) {
                response.sendRedirect("admin.html"); 
            } else {
                // Generic error message
                PrintWriter out = response.getWriter();
                out.println("<p>Login failed. Invalid username or password.</p>");
            }

            resultSet.close();
            statement.close();
            connection.close();

        } catch (Exception e) {
            e.printStackTrace();
        }

    }
}
