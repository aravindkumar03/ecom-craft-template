import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Package, DollarSign, Users, TrendingUp } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { products } from "@/data/mockData";
import { Button } from "@/components/ui/button";

const Admin = () => {
  const navigate = useNavigate();
  const { user, isAuthenticated } = useAuth();

  useEffect(() => {
    if (!isAuthenticated || user?.role !== "admin") {
      navigate("/");
    }
  }, [isAuthenticated, user, navigate]);

  if (!user || user.role !== "admin") {
    return null;
  }

  const stats = [
    {
      title: "Total Revenue",
      value: "$12,459",
      change: "+12.5%",
      icon: DollarSign,
      color: "text-success",
    },
    {
      title: "Orders",
      value: "156",
      change: "+8.3%",
      icon: Package,
      color: "text-primary",
    },
    {
      title: "Customers",
      value: "1,234",
      change: "+15.2%",
      icon: Users,
      color: "text-accent",
    },
    {
      title: "Growth",
      value: "23.5%",
      change: "+4.1%",
      icon: TrendingUp,
      color: "text-success",
    },
  ];

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">Admin Dashboard</h1>
            <p className="text-muted-foreground">
              Welcome back, {user.name}
            </p>
          </div>
          <Button>Add New Product</Button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.title}
                className="bg-card border border-border rounded-lg p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-12 h-12 rounded-lg bg-muted flex items-center justify-center ${stat.color}`}
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="text-sm font-semibold text-success">
                    {stat.change}
                  </span>
                </div>
                <h3 className="text-sm text-muted-foreground mb-1">
                  {stat.title}
                </h3>
                <p className="text-3xl font-bold">{stat.value}</p>
              </div>
            );
          })}
        </div>

        {/* Recent Orders */}
        <div className="bg-card border border-border rounded-lg p-6 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Recent Orders</h2>
            <Button variant="outline" size="sm">
              View All
            </Button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border text-left">
                  <th className="pb-3 font-semibold">Order ID</th>
                  <th className="pb-3 font-semibold">Customer</th>
                  <th className="pb-3 font-semibold">Date</th>
                  <th className="pb-3 font-semibold">Total</th>
                  <th className="pb-3 font-semibold">Status</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    id: "ORD-001",
                    customer: "John Doe",
                    date: "2024-01-25",
                    total: "$299.99",
                    status: "Processing",
                  },
                  {
                    id: "ORD-002",
                    customer: "Jane Smith",
                    date: "2024-01-24",
                    total: "$149.99",
                    status: "Shipped",
                  },
                  {
                    id: "ORD-003",
                    customer: "Bob Johnson",
                    date: "2024-01-24",
                    total: "$89.99",
                    status: "Delivered",
                  },
                ].map((order) => (
                  <tr key={order.id} className="border-b border-border">
                    <td className="py-4 font-medium">{order.id}</td>
                    <td className="py-4">{order.customer}</td>
                    <td className="py-4 text-muted-foreground">
                      {new Date(order.date).toLocaleDateString()}
                    </td>
                    <td className="py-4 font-semibold">{order.total}</td>
                    <td className="py-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          order.status === "Delivered"
                            ? "bg-success/10 text-success"
                            : order.status === "Shipped"
                            ? "bg-accent/10 text-accent"
                            : "bg-primary/10 text-primary"
                        }`}
                      >
                        {order.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Product Management */}
        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Product Management</h2>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                Filter
              </Button>
              <Button size="sm">Add Product</Button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border text-left">
                  <th className="pb-3 font-semibold">Product</th>
                  <th className="pb-3 font-semibold">Category</th>
                  <th className="pb-3 font-semibold">Price</th>
                  <th className="pb-3 font-semibold">Stock</th>
                  <th className="pb-3 font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody>
                {products.slice(0, 5).map((product) => (
                  <tr key={product.id} className="border-b border-border">
                    <td className="py-4">
                      <div className="flex items-center gap-3">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-12 h-12 rounded object-cover"
                        />
                        <span className="font-medium">{product.name}</span>
                      </div>
                    </td>
                    <td className="py-4 text-muted-foreground">
                      {product.category}
                    </td>
                    <td className="py-4 font-semibold">
                      ${product.price.toFixed(2)}
                    </td>
                    <td className="py-4">
                      <span
                        className={
                          product.inStock
                            ? "text-success"
                            : "text-destructive"
                        }
                      >
                        {product.inStock ? "In Stock" : "Out of Stock"}
                      </span>
                    </td>
                    <td className="py-4">
                      <div className="flex gap-2">
                        <Button variant="ghost" size="sm">
                          Edit
                        </Button>
                        <Button variant="ghost" size="sm">
                          Delete
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
