"use client";
import { useState, ChangeEvent } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Truck } from "lucide-react";

// Define a type for the truck object
type TruckType = {
  id: number;
  name: string;
  type: string;
  capacity: string;
  year: number;
  description: string;
};

// Mock data for trucks
const trucksData: TruckType[] = [
  {
    id: 1,
    name: "Heavy Duty Truck",
    type: "Heavy",
    capacity: "20 tons",
    year: 2022,
    description:
      "A powerful truck for heavy loads and long-distance transportation.",
  },
  {
    id: 2,
    name: "Medium Cargo Truck",
    type: "Medium",
    capacity: "10 tons",
    year: 2021,
    description:
      "Versatile truck suitable for various cargo types and medium-distance routes.",
  },
  {
    id: 3,
    name: "Light Delivery Van",
    type: "Light",
    capacity: "2 tons",
    year: 2023,
    description: "Agile and fuel-efficient van for quick urban deliveries.",
  },
  {
    id: 4,
    name: "Refrigerated Truck",
    type: "Heavy",
    capacity: "15 tons",
    year: 2022,
    description:
      "Specialized truck for transporting temperature-sensitive goods.",
  },
  {
    id: 5,
    name: "Flatbed Truck",
    type: "Medium",
    capacity: "12 tons",
    year: 2020,
    description: "Open-bed truck ideal for oversized or oddly shaped cargo.",
  },
  // Add more truck data as needed
];

export default function Component() {
  const [trucks, setTrucks] = useState<TruckType[]>(trucksData);
  const [search, setSearch] = useState<string>("");
  const [sortField, setSortField] = useState<keyof TruckType>("name");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");
  const [filterType, setFilterType] = useState<string>("All");

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    filterTrucks(e.target.value, filterType);
  };

  const handleSort = (field: keyof TruckType) => {
    const direction =
      field === sortField && sortDirection === "asc" ? "desc" : "asc";
    setSortField(field);
    setSortDirection(direction);
    const sortedTrucks = [...trucks].sort((a, b) => {
      if (a[field] < b[field]) return direction === "asc" ? -1 : 1;
      if (a[field] > b[field]) return direction === "asc" ? 1 : -1;
      return 0;
    });
    setTrucks(sortedTrucks);
  };

  const handleFilter = (type: string) => {
    setFilterType(type);
    filterTrucks(search, type);
  };

  const filterTrucks = (searchTerm: string, type: string) => {
    let filtered = trucksData.filter(
      (truck) =>
        truck.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        truck.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
        truck.capacity.toLowerCase().includes(searchTerm.toLowerCase()) ||
        truck.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    if (type !== "All") {
      filtered = filtered.filter((truck) => truck.type === type);
    }
    setTrucks(filtered);
  };

  return (
    <div className="container mx-auto p-4 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Truck Search</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4">
            <Input
              type="search"
              placeholder="Search trucks..."
              value={search}
              onChange={handleSearch}
              className="md:w-1/3"
            />
            <Select onValueChange={handleFilter} defaultValue="All">
              <SelectTrigger className="md:w-1/4">
                <SelectValue placeholder="Filter by type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="All">All Types</SelectItem>
                <SelectItem value="Heavy">Heavy</SelectItem>
                <SelectItem value="Medium">Medium</SelectItem>
                <SelectItem value="Light">Light</SelectItem>
              </SelectContent>
            </Select>
            <Select
              onValueChange={(value) => handleSort(value as keyof TruckType)}
              defaultValue="name"
            >
              <SelectTrigger className="md:w-1/4">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="name">Name</SelectItem>
                <SelectItem value="type">Type</SelectItem>
                <SelectItem value="capacity">Capacity</SelectItem>
                <SelectItem value="year">Year</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {trucks.map((truck) => (
          <Card key={truck.id} className="flex flex-col">
            <CardHeader>
              <CardTitle>{truck.name}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="aspect-video w-full bg-gray-100 rounded-md mb-4 flex items-center justify-center">
                <Truck className="h-20 w-20 text-gray-400" />
              </div>
              <p className="text-sm text-gray-600 mb-2">{truck.description}</p>
              <div className="flex justify-between items-center mt-4">
                <span className="text-sm font-semibold">
                  Capacity: {truck.capacity}
                </span>
                <span className="text-sm font-semibold">
                  Year: {truck.year}
                </span>
              </div>
              <div className="mt-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                  {truck.type}
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {trucks.length === 0 && (
        <Card>
          <CardContent className="flex flex-col items-center justify-center h-40">
            <Truck className="h-10 w-10 text-gray-400 mb-4" />
            <p className="text-xl font-semibold text-gray-500">
              No trucks found
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
