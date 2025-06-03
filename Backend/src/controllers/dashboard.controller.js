const stats = [
  {
    title: "Total Revenue",
    value: "$45,231.89",
    description: "+20.1% from last month",
    icon: "DollarSign",
  },
  {
    title: "Active Users",
    value: "2,350",
    description: "+180.1% from last month",
    icon: "Users",
  },
  {
    title: "Sales",
    value: "12,234",
    description: "+19% from last month",
    icon: "TrendingUp",
  },
  {
    title: "Active Now",
    value: "573",
    description: "+201 since last hour",
    icon: "Activity",
  },
];

const recentSales = [
  {
    name: "Olivia Martin",
    email: "olivia.martin@email.com",
    amount: "+$1,999.00",
    avatar: "/placeholder.svg",
    initials: "OM",
  },
  {
    name: "Jackson Lee",
    email: "jackson.lee@email.com",
    amount: "+$39.00",
    avatar: "/placeholder.svg",
    initials: "JL",
  },
  {
    name: "Isabella Nguyen",
    email: "isabella.nguyen@email.com",
    amount: "+$299.00",
    avatar: "/placeholder.svg",
    initials: "IN",
  },
  {
    name: "William Kim",
    email: "will@email.com",
    amount: "+$99.00",
    avatar: "/placeholder.svg",
    initials: "WK",
  },
  {
    name: "Sofia Davis",
    email: "sofia.davis@email.com",
    amount: "+$39.00",
    avatar: "/placeholder.svg",
    initials: "SD",
  },
];

export const getDashboard = (req, res) => {
  console.log("first")
  const user = req.kauth?.grant?.access_token?.content;

  res.json({
    message: `Welcome ${user?.preferred_username || "User"}!`,
    role: user?.realm_access?.roles || [],
    data: {
      stats,
      recentSales,
    },
  });
};
